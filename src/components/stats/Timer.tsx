import React from 'react';

interface TimerState {
    currTime: Date
}

export class Timer extends React.Component<any, TimerState> {
    private timerId!: NodeJS.Timeout;;
    private startTime = new Date();
    constructor(props: any) {
        super(props);
        this.startTime.setHours(0);
        this.startTime.setMinutes(0);
        this.startTime.setSeconds(0);
        this.state = { currTime: this.startTime }
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState((prev) => ({
            currTime: new Date(prev.currTime.valueOf() + 1000)
        }));
    }

    getFormattedTime() {
        const t = this.state.currTime;
        const format = { minimumIntegerDigits: 2 };
        const hours = t.getHours().toLocaleString('en-us', format);
        const minutes = t.getMinutes().toLocaleString('en-us', format);
        const seconds = t.getSeconds().toLocaleString('en-us', format);
        return `${hours}:${minutes}:${seconds}`;
    }

    render() {
        return (
            <p>{this.getFormattedTime()}</p>
        );
    }
}