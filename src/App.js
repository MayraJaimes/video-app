import React from "react";
import Searchbar from "./components/Searchbar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideos: null,
  };
  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: { q: termFromSearchBar },
    });

    console.log("RESPONSE", response);

    this.setState({ videos: response.data.items });
  };

  handleVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1em" }}>
        <Searchbar handleFormSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//Resource: https://blog.bitsrc.io/make-a-simple-react-app-with-using-youtube-api-68fa016e5a03
//Resource git: https://github.com/anarsultani97/modern-react-redux/blob/master/src/components/VideoItem.js
