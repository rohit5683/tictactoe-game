import React from 'react';

const StatusMessage = ({ winner, isXNext, squares }) => {
  const noMoveLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <React.Fragment>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </React.Fragment>
      );
    }

    if (!winner && noMoveLeft) {
      return (
        <React.Fragment>
          <span className="text-orange">O</span> and{' '}
          <span className="text-green">X</span> Tied
        </React.Fragment>
      );
    }

    if (!winner && !noMoveLeft) {
      return (
        <React.Fragment>
          Next Player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>{' '}
        </React.Fragment>
      );
    }

    return null;
  };

  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};

export default StatusMessage;
