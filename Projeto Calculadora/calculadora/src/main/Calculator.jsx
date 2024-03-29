import { Component } from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}

export default class Calculator extends Component 
{
    state={...initialState};

    //poderia colocar no render da seguinte forma
    //const addDigit = n => this.addDigit(n);
    constructor(props)
    {
        super(props);
        this.setOperation = this.setOperation.bind(this)
        this.clearMemory = this.clearMemory.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory()
    {
        this.setState({...initialState});
    }

    setOperation(operation)
    {
        if(this.state.current === 0)
        {
            this.setState({ operation, current: 1, clearDisplay: true})
        }
        else //caso o current seja 1 
        {
            const equals = operation === '=';
            const currentOperation = this.state.operation; //operacao atual (depois da primeira)


            const values = [...this.state.values];
            try
            {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);

                if (isNaN(values[0]) || !isFinite(values[0])) 
                {
                    this.clearMemory()
                    return
                }
            }
            catch(e)
            {
                values[0] = this.state.values[0]
            }

            values[1] = 0;

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n)
    {   // se usuario ja pos um ponto e esta tentando por de novo, peide pra isso
        if(n === '.' && this.state.displayValue.includes('.')) return;

        // se o valor for 0 (o valor inicial) ou tiver com clearDisplay true, sera necessário limpar o display
        const clearDisplay = this.state.displayValue === '0' 
        || this.state.clearDisplay;

        // se o valor atual for para limpar o display, entao o valor sera nenhum (para add nenhum digito, e futuramente a função clearDisplay ser chamada e colocar o digito do estado inicial (0))
        // se for falso, pode por o digito como o valor atual
        const currentValue = clearDisplay ? '' : this.state.displayValue;

        const displayValue = currentValue + n;

        this.setState({displayValue, clearDisplay: false});

        if(n != '.')
        {
            const indexArray = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];

            values[indexArray] = newValue;
            this.setState({ values })
        }
    }

    render()
    {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label='AC' click={this.clearMemory} triple/>
                <Button label='/' click={this.setOperation} operation/>
                <Button label='7' click={this.addDigit}/>
                <Button label='8'click={this.addDigit}/>
                <Button label='9'click={this.addDigit}/>
                <Button label='*' click={this.setOperation} operation/>
                <Button label='4' click={this.addDigit}/>
                <Button label='5' click={this.addDigit}/>
                <Button label='6' click={this.addDigit}/>
                <Button label='-' click={this.setOperation} operation/>
                <Button label='1' click={this.addDigit}/>
                <Button label='2' click={this.addDigit}/>
                <Button label='3' click={this.addDigit}/>
                <Button label='+'click={this.setOperation} operation/>
                <Button label='0'click={this.addDigit} double/>
                <Button label='.'click={this.addDigit}/>
                <Button label='=' click={this.setOperation} operation/>
            </div>
        )
    }
}