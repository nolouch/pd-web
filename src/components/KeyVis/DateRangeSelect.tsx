// @ts-nocheck
import React from 'react'
import { Popup, Button, Grid, Header } from 'semantic-ui-react'

interface DateRangerProps {}

interface DateRangerState {}

class DateRanger extends React.Component {
  constructor(props: DateRangerProps) {
    super(props)

    this.state = { datesRange: '' }
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value })
    }
  }

  render() {
    return <div />
  }
}

export default DateRanger
