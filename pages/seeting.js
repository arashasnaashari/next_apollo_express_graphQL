import React from "react";
import axios, { post } from "axios";

class SimpleReactFileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.fileUpload(this.state.file).then((response) => {
      console.log(response);
    });
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  async fileUpload(file) {
    // const url = "/api/upload";
    const formData = new FormData();
    formData.append("file", file);
    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };
    await fetch("/api/upload", {
      method: "POST",
      credentials: "same-origin",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default SimpleReactFileUpload;
