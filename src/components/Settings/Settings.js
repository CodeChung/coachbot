import React from 'react';
import SettingsForm from '../SettingsForm/SettingsForm';

class Settings extends React.Component {
    state = {
        modalClass: 'modal',
    }
    displayDeleteForm() {
        const modalClass = 
            this.state.modalClass === 'modal modal-active' 
            ? 'modal' 
            : 'modal modal-active'

        this.setState({modalClass})
    }
    render() {
        return (
            <div>
                <h2>Settings</h2>
                <SettingsForm />
                <button onClick={() => this.displayDeleteForm()}>
                    Delete Goal
                </button>
                <div className={this.state.modalClass}>
                    <div className='modal-content'>
                        <span className="close" onClick={() => this.displayDeleteForm()}>&times;</span>
                        <h3>Are you sure you want to delete this goal?</h3>
                        <button>
                            Yes
                        </button>
                        <button onClick={() => this.displayDeleteForm()}>
                            No
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings