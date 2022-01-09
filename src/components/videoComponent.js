import react from "react";


class VideoComponent extends react.Component{
   
    render(){
        //appending the video id to the source address
        let videoSrc = `https://www.youtube.com/embed/${this.props.videoID}`
        console.log(this.props.videoID)

        return(
            //if this.props.videoID has a value then it will render the iframe for the resulted video
            (this.props.videoID && <div>
                <iframe width="560" height="315" src={videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>)
        )
    }
}

export default VideoComponent;