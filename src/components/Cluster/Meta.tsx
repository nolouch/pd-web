import { Grid, Header, Segment, Label } from 'semantic-ui-react'

import { PDVersion } from 'types/version'
import React from 'react'
import { RootState } from 'reducers'
import { useSelector } from 'react-redux'

const Meta = () => {
  const versionState = useSelector<RootState, PDVersion>(state => state.version)

  return (
    <div className="PD-Cluster-Meta">
      <Segment>
        <Header as="h3">Meta</Header>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment className="meta-field" basic>
                <Header as="h4">PD Version</Header>
                <Label size="small" color="black">
                  {versionState.version}
                </Label>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  )
}

export default Meta
