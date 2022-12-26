import { css } from '@emotion/react'
import styled from '@emotion/styled'
import tw from 'twin.macro'

export const Icons = styled.div`
  font-size: 0;
`

const Icon = css`
  ${tw`inline-flex justify-center items-center`}
  display: inline-flex;
  width: auto;
  height: 1.5em;
  border-radius: 2px 4px 2px 2px;
  cursor: pointer;
  position: relative;
  margin: 0 5px;
  padding-top: 3px;
  padding-bottom: 4px;
  padding-left: 6px;
  padding-right: 19px;
  color: #fff;
  font-size: 10px;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    width: 12px;
    height: 12px;
    border-radius: 0 2px;
    transition: all 0.2s linear;
    backface-visibility: hidden;
  }

  i {
		display: block; 
		font-weight: 500;
    max-width: 80%;
		&:before, &:after {
			display: block;
			transition: all 0.2s linear;
		}
		&:before {
			text-align: center;
			font-size: 12px;
		}
		&:after {
			content: attr(title);
      text-overflow: ellipsis;
      overflow: hidden;
		}
  }
`

export const IconDoc = styled.div`
  ${Icon}
  background-color: #0060ff;
  &:after {
    background: linear-gradient(45deg, #4d90ff 50%, #fff 50%);
  }
  i {
  }
`

export const FileUploadWrapper = styled.div`
  ${tw`relative`}
`

export const CardBody = styled.div`
  border: 2px dashed #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 30px 30px 40px;
  position: relative;
`

export const CardTxtCardOr = styled.div``
export const CardTxtCard = styled.div``

export const CardText = styled.div`
  text-align: center;
  color: #6f6f6f;
  svg {
    width: 60px;
    path {
      fill: #ddd;
    }
  }
  ${CardTxtCard} {
    margin-bottom: 5px;
    ${CardTxtCardOr} {
      color: #ccc;
    }
  };
`

export const Button = styled.button`
  background: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: 10px 10px;
  width: 100px;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #0069d9;
  }
`
