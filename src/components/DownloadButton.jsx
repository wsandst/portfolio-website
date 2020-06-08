//Component for a download button for executables for the projects

import React, { Component } from "react";

import styled from "@emotion/styled"
import { css } from "@emotion/core"

import "../layout/layout.css";

const DropDownContentCSS = styled.div`
    display: none;
    position: absolute;
`;

const DownloadButtonCSS = styled.div`
    display: inline-block; 
    padding: 0.2rem 0.5rem; 
    margin: 0 0.5rem 0.5rem 0; 
    background-color: var(--button); 
    border-radius: 6px; 
    font-size: 80%;
    position: relative;
    &:hover ${DropDownContentCSS} {
        display: block;
    }
`;


class DownloadButton extends Component {
    render() {
      const downloads = this.props.location.split(",");
      if (downloads && downloads[0] != "")
      {
      for(var i = 0; i < downloads.length; i++) {
        const split = downloads[i].split(":");
        downloads[i] = {title: split[0], link: split[1].trim()};
        }
      }
      else
        return(<div></div>)
      return (
        <DownloadButtonCSS>
            Download
            <DropDownContentCSS>
                {/* Different download options */
                    downloads.map(download => (
                        <a href={"/downloads/"+download.link}> {download.title} </a>
                ))}
            </DropDownContentCSS>
        </DownloadButtonCSS>
      );
    }
  }

  export default DownloadButton;