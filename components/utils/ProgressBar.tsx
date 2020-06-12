import React, { useEffect, FunctionComponent } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';

interface CssProps {
    Color?: string;
    Height?: number;
    Option?: object;
    StartPosition?: number;
    StopDelayMs?: number;
}

const ProcessBar: FunctionComponent<CssProps> = ({
    Color,
    Height,
    Option,
    StartPosition,
    StopDelayMs,
}) => {
    let timer = null;

    useEffect(() => {
        if (Option) {
            NProgress.configure(Option);
        }

        Router.events.on('routeChangeStart', routeChangeStart);
        Router.events.on('routeChangeComplete', routeChangeEnd);
        Router.events.on('routeChangeError', routeChangeEnd);
    }, []);
    const routeChangeStart = () => {
        NProgress.set(StartPosition);
        NProgress.start();
    };

    const routeChangeEnd = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            NProgress.done(true);
        }, StopDelayMs);
    };

    return (
        <style jsx global>{`
            #nprogress {
                pointer-events: none;
            }
            #nprogress .bar {
                background: ${Color};
                position: fixed;
                z-index: 1031;
                top: 0;
                left: 0;
                width: 100%;
                height: ${Height}px;
            }
            #nprogress .peg {
                display: block;
                position: absolute;
                right: 0px;
                width: 100px;
                height: 100%;
                box-shadow: 0 0 10px ${Color}, 0 0 5px ${Color};
                opacity: 1;
                -webkit-transform: rotate(3deg) translate(0px, -4px);
                -ms-transform: rotate(3deg) translate(0px, -4px);
                transform: rotate(3deg) translate(0px, -4px);
            }
            #nprogress .spinner {
                display: 'block';
                position: fixed;
                z-index: 999;
                top: 15px;
                right: 15px;
            }
            #nprogress .spinner-icon {
                width: 18px;
                height: 18px;
                box-sizing: border-box;
                border: solid 2px transparent;
                border-top-color: ${Color};
                border-left-color: ${Color};
                border-radius: 50%;
                -webkit-animation: nprogresss-spinner 400ms linear infinite;
                animation: nprogress-spinner 400ms linear infinite;
            }
            .nprogress-custom-parent {
                overflow: hidden;
                position: relative;
            }
            .nprogress-custom-parent #nprogress .spinner,
            .nprogress-custom-parent #nprogress .bar {
                position: absolute;
            }
            @-webkit-keyframes nprogress-spinner {
                0% {
                    -webkit-transform: rotate(0deg);
                }
                100% {
                    -webkit-transform: rotate(360deg);
                }
            }
            @keyframes nprogress-spinner {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        `}</style>
    );
};

ProcessBar.defaultProps = {
    Color: '#1abc9c',
    StartPosition: 0.3,
    StopDelayMs: 200,
    Height: 4,
};

export default ProcessBar;
