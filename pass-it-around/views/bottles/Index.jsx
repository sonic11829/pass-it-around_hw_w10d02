const React = require('react');

class Index extends React.Component {
    render() {
        const { bottles } = this.props;
        return (
            <div>
                <h1>Take One Down Index Page</h1>
                <ul>
                    {bottles.map((bottle, i) => {
                        return (
                            <li>
                                There are {bottle.amount} {bottle.color} bottles of{' '}
                                <a href={`/bottles/${i}`}>
                                    {bottle.name}
                                </a>{' '}
                                on the wall and one of them  <br></br>
                                {bottle.readyToDrink
                                    ? `Is ready to drink`
                                    : `Is not ready to drink`}
                                <br />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

module.exports = Index;