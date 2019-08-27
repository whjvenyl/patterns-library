/* global document */
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/html';
// if your need more boolean, select, radios
import { text, radios, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import './index';
import Readme from './README.md';

const storyAXACommercialHeroBanner = storiesOf(
  'Organisms/Commercial Hero Banner/Demos',
  module
);
storyAXACommercialHeroBanner.addDecorator(withNoBorder);
storyAXACommercialHeroBanner.addDecorator(withKnobs);
storyAXACommercialHeroBanner.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyAXACommercialHeroBanner.add('Commercial Hero Banner', () => {
  const variant = radios(
    'Variant',
    {
      light: 'light',
      dark: 'dark',
    },
    'light'
  );

  const imageSource = text(
    'Image Source',
    'https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg'
  );

  const wrapper = document.createElement('div');
  const template = html`
    <style>
      .o-commercial-hero-banner-demo__badge-wrapper {
        position: absolute;
        right: 20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 10px;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        text-align: center;
        border-radius: 50% 50% 50% 0;
        background: #c91432;
        color: #fff;

        top: 10px;
        width: 120px;
        height: 120px;
      }

      .o-commercial-hero-banner-demo__badge-content {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: 0.01em;
        font-size: 16px;
      }

      @media (min-width: 576px) {
        .o-commercial-hero-banner-demo__badge-wrapper {
          width: 140px;
          height: 140px;
        }

        .o-commercial-hero-banner-demo__badge-content {
          font-size: 18px;
        }
      }

      @media (min-width: 992px) {
        .o-commercial-hero-banner-demo__badge-wrapper {
          top: 44px;
          width: 160px;
          height: 160px;
        }

        .o-commercial-hero-banner-demo__badge-content {
          font-size: 20px;
          line-height: 24px;
        }

        .o-commercial-hero-banner-demo__addon {
          position: absolute;
          top: 380px;
          right: 20px;
        }
      }

      @media (min-width: 1200px) {
        .o-commercial-hero-banner-demo__badge-wrapper {
          right: 150px;
        }

        .o-commercial-hero-banner-demo__addon {
          right: 150px;
        }
      }

      .o-commercial-hero-banner-demo__addon {
        display: block;
        background: blue;
        color: white;
        height: 100px;
        width: 200px;
      }
    </style>
    <axa-commercial-hero-banner
      variant="${variant}"
      imagesource="${imageSource}"
    >
      <h2 slot="category">This example shows specific picture classes</h2>
      <h1 slot="title">Drive with peace of mind</h1>
      <p slot="content">
        Whether you need to insure your first car or renew your existing car
        insurance, AXA can provide a range of car insurance policies to suit
        your requirements and offer great product benefits at a price you can
        afford
      </p>
      <small slot="disclaimer">Terms and Conditions apply.</small>
      <axa-button-link
        href="https://axa.ch"
        slot="button"
        variant="red"
        size="large"
        >GET A QUOTE</axa-button-link
      >
      <div slot="badge" class="o-commercial-hero-banner-demo__badge-wrapper">
        <p class="o-commercial-hero-banner-demo__badge-content">
          Get up to CHF 100 discount
        </p>
      </div>
      <div slot="addon" class="o-commercial-hero-banner-demo__addon">
        This could be the customer review badge
      </div>
    </axa-commercial-hero-banner>
  `;

  render(template, wrapper);
  return wrapper;
});