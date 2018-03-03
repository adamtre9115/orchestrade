import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  Row
} from "reactstrap";
import "./Carousel.css";

const items = [
  {
    src: "https://wallpaperscraft.com/image/violin_book_notes_paper_strings_3885_1920x1080.jpg",
      //"https://images.unsplash.com/photo-1496369654500-4f0caba0ecfa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7444af35f5635a9d2d3b5e1a16394292&auto=format&fit=crop&w=1200&q=80",
    altText: "String",
    caption: "String"
  },
  {
    src: "http://www.bhmpics.com/wallpapers/drums-1920x1080.jpg",
      //"https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7c8048a14f18ed9609cec1f9bb74728&auto=format&fit=crop&w=1200&q=80",
    altText: "Wind",
    caption: "Wind"
  },
  {
    src: "http://www.bhmpics.com/wallpapers/saxophone_music_instrument-1920x1080.jpg",
        //"https://images.unsplash.com/photo-1510189391615-d2677d3e8e8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6f6a66f71c930761054595a013cba79&auto=format&fit=crop&w=1200&q=80",
    altText: "Keys",
    caption: "Keys"
  }
];

class newCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="img-fluid" width="1920" height="1080"/>
          {/* <CarouselCaption captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });

    return (
      <div>
        <div className="text-center">
          <Row>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              {/* <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={this.goToIndex}
              /> */}
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={this.previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={this.next}
              />
            </Carousel>
          </Row>
        </div>
      </div>
    );
  }
}

export default newCarousel;
