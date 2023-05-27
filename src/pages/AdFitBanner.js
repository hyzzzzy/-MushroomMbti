import React from "react";
import styled from "styled-components";

export class AdfitBannerAd extends React.Component {

  constructor(props) {
    super(props)
  }
  
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    let ins = document.createElement('ins');
    let scr = document.createElement('script');

    ins.className = 'kakao_ad_area';
    ins.setAttribute('style', 'display: none;');
    scr.async = true;
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    ins.setAttribute('data-ad-width', '320');
    ins.setAttribute('data-ad-height', '50');
    ins.setAttribute('data-ad-unit', 'DAN-ZgBOJmmkc1lez8x2');

    let parent = document.getElementById('adFit');
    parent?.appendChild(ins);
    parent?.appendChild(scr);
  }

  render() {
    return (
        <BannerAd id="adFit"/>
    )
  }
}

const BannerAd = styled.div`
  width: 100%;
  margin-top: 50px;
`