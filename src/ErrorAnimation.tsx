import { ClassNames, keyframes } from '@emotion/react'
import { Transition } from '@headlessui/react';
import { DOMAttributes, Fragment } from 'react';
import tw, { css, styled } from 'twin.macro';

interface ErrorAnimationProps extends DOMAttributes<SVGElement> {
  isOpen: boolean;
  fillAni?: boolean;
}
const ErrorAnimation = ({ isOpen = false, fillAni = false, ...props }: ErrorAnimationProps) => {
  return (
    <ClassNames>
      {({ css }) => (
        // @ts-ignore
        <Transition
          show={isOpen}
          as={Fragment}
          enter={css(tw`transition ease-out duration-200`)}
          enterFrom={css(tw`opacity-0`)}
          enterTo={css(tw`opacity-100`)}
          leave={css(tw`transition ease-in duration-150`)}
          leaveFrom={css(tw`opacity-100`)}
          leaveTo={css(tw`opacity-0`)}
        >
          <Checkmark viewBox="0 0 52 52" fillAni {...props}>
            <Circle cx="26" cy="26" r="25" fillAni fill="none" />
            <Check strokeLinecap="round" fill="none" d="M16 16 36 36 M36 16 16 36" />
          </Checkmark>
        </Transition>
      )}
    </ClassNames>
  )
}

export default ErrorAnimation

const stroke = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`

const scale = keyframes`
  0%, 100% {
    transform: none;
  }

  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
`

const fill = keyframes`
  100% {
    box-shadow: inset 0px 0px 0px 75px #ff4444;
  }
`

const Checkmark = styled.svg<{ fillAni: boolean }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #ff4444;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #ff4444;
  ${({ fillAni }) => !fillAni && css`animation: ${fill} .4s ease-in-out .4s forwards, ${scale} .3s ease-in-out .9s both`}
  position:relative;
`

const Circle = styled.circle<{ fillAni: boolean }>`
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #ff4444;
  /* fill: #fff; */
  ${({ fillAni }) => !fillAni && css`fill: #fff`}
  animation: ${stroke} 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
`

const Check = styled.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: ${stroke} 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
`
