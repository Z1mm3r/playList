import React, { Component } from 'react';
import EditNewPage from './edit_playlist_components/edit_new_page'
import UsersPlLIst from './user_pl_list'

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editNewPage: false,
      thePlaylists: []
    }
  }

  toggle = () => {
    let theSwitch = this.state.editNewPage
    theSwitch = !theSwitch
    this.setState({editNewPage: theSwitch})
  }

  getCreatedPlaylist = (playlist) => {
    this.setState({
      thePlaylists: [...this.state.thePlaylists, playlist]
    }, ()=> console.log(this.state.thePlaylists))
  }

  render() {
    return (
      <div>
        {this.state.editNewPage?<EditNewPage toggle={this.toggle} getCreatedPlaylist={this.getCreatedPlaylist}/>:

        <div onClick={this.toggle}>
          This is the Profile Page, click me to go to the new and edit playlist page
          <div>
            <UsersPlLIst thePlaylists={this.state.thePlaylists}/>
          </div>
        </div>}
      </div>

    )
  }
}
export default ProfilePage
