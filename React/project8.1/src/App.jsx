
import './App.css'
// import PlayButton from './components/PlayButton'
// import UploadButton from './components/UploadButton'
import Button from './components/Button'
// import AlertHere from './components/AlertHere'

function App() {
  function handleClick(){
    alert("You have clicked the button!!")
  }

  return (
    <div>

      {/* <PlayButton moviename="12th Fail"/>
      <UploadButton/> */}

      <Button onSmash={() => alert("Playing..")}>
        Play Movie
      </Button>

      <Button  onSmash={() => alert("uploadinnngnnng..")}>
        Upload Image
      </Button>

    </div>
      
  )
}

export default App


// type - 1:


      // <AlertHere msg="playing.....">
      //     Play Movie
      // </AlertHere>

      // <AlertHere msg="Uploading....">
      //     Upload Image
      // </AlertHere>
