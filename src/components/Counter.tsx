import React, {Component, FC} from "react";

interface CounterState {
    count: number;
}

class Counter extends Component<{
    message: string
}, CounterState> {
    state: CounterState = {
        count: 0
    };
    render() {
        return (
            <div>
                {this.props.message} {this.state.count}
            </div>
        );
    }
}

export const Example: FC = () => {
    return <div>Functional component text</div>
}

export default Counter