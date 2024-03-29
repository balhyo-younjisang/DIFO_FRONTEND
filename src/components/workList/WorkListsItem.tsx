import { useNavigate } from 'react-router-dom';
import {
  M_WorkLists,
  M_WorkListsInfos,
  M_WorkListsStack,
  M_WorkListsStacks,
  M_WorkListsTitle,
  M_WorkListsWriter,
  M_WorkListsWriterTime,
} from '../../style/workList/workLists.style';
import { Stack } from '../../types/BestWorks.type';

interface WorkListsItem {
  id: number;
  type: string;
  title: string;
  writer: string;
  stacks?: Stack[];
}

export const WorkListsItem = ({
  id,
  type,
  title,
  writer,
  stacks,
}: WorkListsItem) => {
  const navigator = useNavigate();

  const handleToWorks = (workId: string) => {
    navigator(`/works/${type}?id=${workId}`);
  };
  return (
    <>
      <M_WorkLists
        onClick={() => {
          handleToWorks(id.toString());
        }}
      >
        <M_WorkListsTitle>{title}</M_WorkListsTitle>
        <M_WorkListsInfos>
          <M_WorkListsStacks>
            {!!stacks &&
              stacks.map((element, idx) => (
                <M_WorkListsStack key={idx}>
                  {element.stackName}
                </M_WorkListsStack>
              ))}
          </M_WorkListsStacks>
          <M_WorkListsWriterTime>
            <M_WorkListsWriter>{writer}</M_WorkListsWriter>
          </M_WorkListsWriterTime>
        </M_WorkListsInfos>
      </M_WorkLists>
    </>
  );
};
