import React, { Component } from 'react';
import axios from 'axios';
import Main from '../template/Main/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'

const initialState = {
    user: { name: '', email: ''},
    list: []
}

export default class UserCrud extends Component 
{
    // Refatorar depois (separando a gaelra em componentes menores)

    state = {...initialState};

    componentDidMount()
    {
        axios(baseUrl).then(res => {
            this.setState({ list: res.data})
        })
    }

    clearForm()
    {
        this.setState({user: initialState.user})
    }

    // função save vai alterar ou incluir um uxuario
    save()
    {
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

        axios[method](url, user)
            .then(res =>{
                const list = this.getUpdatedList(res.data); //dados virão do JSON Server já formatados (com id e tal) após alterar ou incluir
                this.setState({ user: initialState.user, list });
            })
    }

    getUpdatedList(user, addElement = true)
    {
        const list = this.state.list.filter(userFromList => userFromList.id !== user.id);
        if(addElement) list.unshift(user);
        return list;
    }

    updateField(event)
    {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    renderForm()
    {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className='form-control'
                            name='name' value={this.state.user.name}
                            onChange={e => this.updateField(e)}
                            placeholder='Digite o nome...'/>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className='form-control'
                            name='email' value={this.state.user.email}
                            placeholder='Digite um email...'
                            onChange={e => this.updateField(e)} />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                        onClick={e => this.save(e)} >
                            Salvar
                        </button>
                        <button className="btn btn-secondary btn-cancel"
                        onClick={e => this.clearForm(e)} >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user)
    {
        this.setState({ user })
    }

    remove(user)
    {
        axios.delete(`${baseUrl}/${user.id}`).then(res => {
            //exluiu corretamente o usuario
            const list = this.getUpdatedList(user, false);
            this.setState({ list });
        })
    }

    renderTable()
    {
        console.log(this.state.list)
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>E-mail</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
    
    renderRows()
    {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger btn-cancel"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }

}