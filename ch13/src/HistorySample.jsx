import React, { Component, useState } from 'react'

class HistorySample extends Component {
    // back

    handleGoBack = () => {
        this.props.history.goBack();
    }

    // go home
    handleGoHome = () => {
        this.props.history.push('/')
    }

    componentDidMount() {
        // Cannot read properties of undefined (reading 'block') 가 발생
        // 해결점: 훅스로 boolean 상태를 관리한다.
        // prompt 창을 띄워서 참이면 사이트를 나가지 않고
        // false면 창을 나가는 것으로 간주한다.
        // 근데 그러면 아예 함수형으로 교체해야 한다.
        // 그러면 componentDidMount가 아닌 handle*함수에서 관리할 것이라고 생각한다.
        // const HistorySample = ({ history }) => {
        //     const goBack = () => {
        //       history.goBack();
        //     }
        //     const goHome = () => {
        //       history.push('/');
        //     }
        //     useEffect(() => {
        //       console.log(history);
        //       const unblock = history.block('이동하시겠습니까?');
        //       return () => {
        //         unblock();
        //       }
        //     }, [history]);
          
        //     return (
        //       <div>
        //         <button onClick={goBack}>뒤로가기</button>
        //         <button onClick={goHome}>홈으로</button>
        //       </div>
        //     )
        //   }
        this.unblock = this.props.history.block('are you real out?')
    }

    componentWillUnmount() {
        if (this.unblock) {
            this.unblock()
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>go back</button>
                <button onClick={this.handleGoHome}>go home</button>
            </div>
        )
    }
}

export default HistorySample
