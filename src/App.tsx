import ErrorAnimation from "ErrorAnimation";
import _ from "lodash";
import { useRef, useState } from "react";
import { FileDrop } from "react-file-drop";
import { Button, CardBody, CardText, CardTxtCard, CardTxtCardOr, FileUploadWrapper, IconDoc, Icons } from "Style"
import tw from "twin.macro";

function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File[]>([]);
  const [isError, setIsError] = useState(false);
  const [totalFileSize, setTotalFileSize] = useState(0);
  const maxFileCount = 5;

  const handle = (files: FileList) => {
    const arr = Object.values(files);
    const dd = file.concat(arr);
    setFile(dd);
  };

  const CheckFileSize = (files: FileList) => {
    let pass = true;
    _.forEach(files, file => {
      // 10MB 이상일 경우
      if (file.size >= 10485760) {
        setIsError(true);
        pass = false;
        return;
      }
      // 20MB 이상일 경우
      if (totalFileSize + file.size >= 20971520) {
        setIsError(true);
        pass = false;
        return;
      }
      setTotalFileSize(totalFileSize + file.size);
      return;
    })

    return pass;
  }

  const limitFileCount = (files: FileList | null) => {
    if (!files) return;

    // 누적된 업로드 파일갯수가 5개 이상일 경우
    if (file.length >= maxFileCount) {
      setIsError(true);
      return;
    }

    // 초기에 한번에 업로드하는 파일 갯수가 5개 이상일 경우
    if (files?.length >= maxFileCount) {
      setIsError(true);
      return;
    }

    // 용량체크 && 파일 상태값으로 저장
    CheckFileSize(files) && handle(files);
  }

  return (
    <>
      <Icons>
        {inputRef.current?.files?.length}
      </Icons>
      <FileUploadWrapper>
        <div
          css={[
            tw`absolute w-full h-full flex flex-col justify-center items-center bg-white bg-opacity-90 transition-opacity`,
            isError ?
              tw`z-20 opacity-100` :
              tw`z-[-1] opacity-0`,
          ]}>
          <ErrorAnimation isOpen={isError} />
          <div tw="text-center">
            <p>최대 5개까지 업로드 가능합니다.</p>
            <p>
              파일 한개당 10mb이하, 전체 파일의 용량은 20mb이하여야 하며, exe 형식의 파일은 첨부할 수 없습니다.
            </p>
          </div>
          <button type="button" onClick={() => setIsError(false)} tw="absolute cursor-pointer right-[14px] top-[14px] p-0 border-none shadow-none ring-0 bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" tw="w-6 h-6">
              <path strokeLinecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <FileDrop onDrop={limitFileCount}>
          <CardBody tw="mb-[8px]">
            <CardText>
              <CardTxtCard>
                <svg viewBox="0 0 612 612">
                  <g>
                    <path d="M0,389.581C0,444.8,41.338,490.616,95.639,499.462l19.139,1.529h382.5l19.14-1.529C570.662,490.616,612,444.8,612,389.581   c0-48.516-31.936-89.798-76.527-105.098c-1.614-96.084-82.343-173.474-181.653-173.474c-71.632,0-133.583,40.253-163.181,98.755   c-13.993-15.022-34.244-24.48-56.777-24.48c-42.256,0-76.5,33.271-76.5,74.274c0,10.71,2.336,20.892,6.509,30.099   C26.038,307.851,0,345.767,0,389.581z M306,250.1l111.272,125.183h-55.998v125.182h-111.05V375.282h-55.498L306,250.1z"></path>
                  </g>
                </svg>
                <div>문서를 여기로 드래그 앤 드롭하여 업로드</div>
                <CardTxtCardOr>or</CardTxtCardOr>
                <input
                  hidden
                  type="file"
                  id="input-file"
                  multiple
                  ref={inputRef}
                  onChange={e => {
                    limitFileCount(e.target.files);
                    e.target.value = "";
                  }}
                />
                <Button onClick={(e) => {
                  e.preventDefault();
                  inputRef.current!.click()
                }}>파일찾기</Button>
              </CardTxtCard>
            </CardText>
          </CardBody>
          <div tw="text-[#666666]">파일 한개당 10mb이하, 전체 파일의 용량은 20mb이하여야 하며, exe 형식의 파일은 첨부할 수 없습니다.</div>
        </FileDrop>
        {file.map((x) => (
          <ul>
            <li tw="flex items-center">
              <span>{x.name}</span>
              <IconDoc>{x.type}</IconDoc>
            </li>
          </ul>
        ))}
      </FileUploadWrapper>
    </>
  )
}

export default App
