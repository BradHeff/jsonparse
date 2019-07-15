import React from 'react';

export const LoadingComponent = ({isLoading, error}: Loading): JSX.Element | null => {
    if (isLoading) {
        return (
            <div className="App-header">
                <div id="loader"></div>
                <h2>Loading...</h2>
            </div>
        );
    }
    else if (error) {
      return (
        <div className="text-center">
            <div className="App-header">
                <h2>Sorry, There was a problem loading this page.</h2>
            </div>
        </div>
    );
    }
    else {
      return null;
    }
}