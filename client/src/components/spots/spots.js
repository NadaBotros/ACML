import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import axios from 'axios'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Row from './row.js'
const count = 1
const useStyles = makeStyles(theme => ({
	root: {
		width: '100%'
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	}
}))

export class spots extends Component {
	state = {
		expanded: null,
		longitude: '',
		latitude: '',
		occupied: true,
		checkedA: true,
		object: []
	}

	componentDidMount() {
		axios
			.post('http://localhost:5000/api/spots/parkingLot', {
				parkingLot: localStorage.getItem('parking')
			})
			.then(res => {
				this.setState({
					object: res.data.data
				})
			})
	}

	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false
		})
	}

	handleChange2 = name => event => {
		this.setState({ [name]: event.target.checked })
	}

	render() {
		console.log(localStorage.getItem('parking'))
		const { classes } = this.props
		const { expanded } = this.state

		return (
			<div>
				<FormGroup row>
					<FormControlLabel
						control={
							<Switch
								checked={this.state.checkedB}
								onChange={this.handleChange2('checkedB')}
								value='checkedB'
								color='primary'
							/>
						}
						label='Empty spaces'
					/>
				</FormGroup>
				<div className={classes.root}>
					{this.state.object.map(element => (
						<Row></Row>
					))}
				</div>
			</div>
		)
	}
}

export default withStyles(useStyles)(spots)
