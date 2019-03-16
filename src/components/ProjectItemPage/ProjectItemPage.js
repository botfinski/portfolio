import React, { Component } from "react";
import "./ProjectItemPage.css";
import Wrapper from "../Wrapper/Wrapper";
import Pager from "../Pager/Pager";
import propTypes from "prop-types";

class ProjectItemPage extends Component {
  componentDidMount() {
    document.title = "Portfolio - " + this.props.title;
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Wrapper className="content">
        <div className="content__row">
          {/* prettier-ignore */}
          <img
						srcSet={require("../../data/" + this.props.url + "/" + this.props.url + "_main.jpg") + " 1x, " + 
							require("../../data/" + this.props.url + "/" + this.props.url + "_main@2x.jpg") + " 2x"}
            src={require("../../data/" + this.props.url + "/" + this.props.url + "_main.jpg")}
            alt={this.props.title + " main image"}
            className="content__image content__image--width100"
          />
        </div>
        <div className="content__row content__row--info">
          <h1>{this.props.title}</h1>
          <p>{this.props.content.description}</p>
        </div>

        {this.props.content.structure.map((row, i) => {
          return (
            <div className="content__row" key={i}>
              {row.map((image, j) => {
                let image2x = image.substring(0, image.indexOf(".")) + "@2x" + image.slice(image.indexOf("."));

                return (
                  <img
                    className={"content__image--width" + Math.round(100 / row.length)}
                    // prettier-ignore
                    srcSet={require("../../data/" + this.props.url + "/" + image) + " 1x, " +
                      require("../../data/" + this.props.url + "/" + image2x) + " 2x"}
                    src={require("../../data/" + this.props.url + "/" + image)}
                    alt=""
                    key={j}
                  />
                );
              })}
            </div>
          );
        })}
        <Pager id={this.props.id} urlList={this.props.urlList} />
      </Wrapper>
    );
  }
}

ProjectItemPage.propTypes = {
  title: propTypes.string,
  id: propTypes.number,
  url: propTypes.string,
  content: propTypes.object,
  urlList: propTypes.array
};

export default ProjectItemPage;
