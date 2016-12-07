import Inferno from 'inferno'
import Component from 'inferno-component'
import {observable} from 'mobx'
import {observer} from 'inferno-mobx'


@observer
class ControlledInput extends Component {
	@observable val = 'val';

	handleChange = e => {
		console.log('handleChange>', e);
		this.val = e.target.value;
	};

	render() {
		return <main>
			<input type="text"
		           onInput={this.handleChange}
			       value={this.val}
			/>
			{/* remove "value={this.val}" to make it working */}

			<p>Hello {this.val}!</p>
		</main>
	}
}

const container = document.getElementById('container');
Inferno.render(<ControlledInput />, container);
