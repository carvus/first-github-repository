import react from "react";
import Loader from "react-loader-spinner";
import styles from "./Loading.module.css";

class Loading extends react.Component {
  render() {
    return (
      <div className={styles.loadingContainer}>
        <Loader
              type="Audio"
              color="#414df2"
              height={100}
              width={100}
              timeout={3000} //3 secs
        />
      </div>
    );
  }
}

export default Loading;
