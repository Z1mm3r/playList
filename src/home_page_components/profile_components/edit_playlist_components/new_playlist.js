import React, {Component} from 'react'
import PlaylistItems from './playlist_items'

class NewPlaylist extends Component {

  state = {
    playlistName: ''
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.props.createThePlaylist(this.state.playlistName)
    this.setState({playlistName: ''})
  }

  createPlaylistItems = () => {
    return this.props.playlist.map(videoObj => {
      return <PlaylistItems handleDelete={this.props.handleDelete} key={videoObj.etag} videoObj={videoObj} />
    })
  }

  render() {
    return (
      <div>
        <form  >
          <label>
            Playlist Name:
            <input onChange={(event)=> this.setState({playlistName: event.target.value})} value={this.state.playlistName} type="text" name="name" />
          </label>
          <ul className= "col-md-4 list-group">
            {this.createPlaylistItems()}
          </ul>
          <input onClick={this.handleSubmit} type="submit" value="CreatePlaylist"
          />
        </form>
      </div>
    )
  }
}

export default NewPlaylist
