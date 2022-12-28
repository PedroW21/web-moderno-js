import { Component } from 'react';
import Button from '../components/Button/Button';
import './Calculator.css';
import Display from '../components/Display/Display';

const stateChangeDisplay = {
    displayedValue: '0',
    needToClear: false
}

const initialState = {
    displayedValue: '0',
    values: [0, 0],
    actualElement: 0,
    operation: null,
    needToClear: false
}

export default class Calculator extends Component
{

    state = {
        displayedValue: '0',
        values: [0, 0],
        actualElement: 0,
        operation: null,
        needToClear: false
    }

    clearDisplay = () =>
    {
        this.setState({...stateChangeDisplay})
    }

    resetCalc = () => 
    {
        this.setState({...initialState});
    }

    equals = () => 
    {
        this.operation(this.state.operation);
        console.log(this.state.values)
        this.setState({values: [0,0]});
    }

    removeDigit = () =>
    {
        let actualDisplayedValue = this.state.displayedValue;
        console.log(typeof actualDisplayedValue)
        const values = [...this.state.values]; 

        let newDisplayedValue = actualDisplayedValue.slice(0, actualDisplayedValue.length-1);
        values[this.state.actualElement] = parseInt(newDisplayedValue);
        values[this.state.actualElement + 1] = 0

        this.setState({
            displayedValue: newDisplayedValue,
            values
        })
    }

    addDigit = (value) =>
    {

        if(this.state.needToClear)
        {
            let values = [...this.state.values];
            values[this.state.actualElement] = parseInt(value)
            this.setState({ needToClear: false, displayedValue: value })
            return
        }
            
            const actualValue = this.state.displayedValue;
            const values = [...this.state.values];
            const actualElement = this.state.actualElement; 
    
            let newValue;
            
            if(value === '.' && actualValue.includes('.')) return;
    
            actualValue === '0' && value !== '.' ? newValue = value : newValue = actualValue + value;
     
            const parsedValue = newValue.includes('.') ? parseFloat(newValue) : parseInt(newValue);
    
            values[actualElement] = parsedValue;
        
            this.setState({ displayedValue: newValue, values });
   

    };

    operation = (operation) => {

        if(this.state.actualElement === 0 && this.state.values[1] === 0)
        {
            const displayedValue =this.state.displayedValue;
            let values = [...this.state.values];

            values[0] = displayedValue.includes('.') ? parseFloat(displayedValue) : parseInt(displayedValue);
            
            this.setState({ 
                actualElement: 1, 
                operation, 
                values
            });

            this.clearDisplay();
        }
        else
        {
            let values = [...this.state.values];
            const [firstValue, secondValue] = values;
            let result = 0;

            switch (operation) 
            {
                case '+':
                    result = firstValue + secondValue;
                    break;
            
                case '-':
                    result = firstValue - secondValue;
                    break;
                
                case 'X':
                    result = firstValue * secondValue;
                    break;
                
                case '/':
                    result = firstValue / secondValue;
                    break;
            
                case '%':
                    result = (firstValue / 100) * secondValue;
                    break;

                default:
                    break;
            }

            if (isNaN(result) || !isFinite(result)) 
            {
                this.resetCalc()
                return
            }

            values[1] = result;

            this.setState({
                displayedValue: `${result}`,
                values,
                actualElement: 0,
                needToClear: true
            })
            
        }

    }

    render()
    {
        return(
            <div className='calculator'>
                <Display value={this.state.displayedValue}/>
                <Button label='AC' click= {this.resetCalc} ac/>
                <Button label='%' click= {this.operation}/>
                <Button label='/' click= {this.operation}/>
                <Button label='7' click= {this.addDigit}/>
                <Button label='8' click= {this.addDigit}/>
                <Button label='9' click= {this.addDigit}/>
                <Button label='X' click= {this.operation}/>
                <Button label='4' click= {this.addDigit}/>
                <Button label='5' click= {this.addDigit}/>
                <Button label='6' click= {this.addDigit}/>
                <Button label='-' click= {this.operation}/>
                <Button label='1' click= {this.addDigit}/>
                <Button label='2' click= {this.addDigit}/>
                <Button label='3' click= {this.addDigit}/>
                <Button label='+' click= {this.operation}/>
                <Button label='0' click= {this.addDigit}/>
                <Button label='.' click= {this.addDigit}/>
                <Button label='DEL' click= {this.removeDigit} delete/>
                <Button label='=' click= {this.equals}/>
            </div>
        )
    }

}