'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Section } from '@/types';
import { useState } from 'react';
import { Button } from '../ui/button';

interface ICourseSection {
  className?: string;
  sections: Section[];
}

enum ExpandState {
  'ALL_EXPANDED',
  'ALL_COLAPSED',
}

const CourseContent: React.FC<ICourseSection> = ({ className, sections }) => {
  const [allExpanded, setAllExpanded] = useState<ExpandState>(
    ExpandState.ALL_COLAPSED
  );

  const toggleExpandState = () => {
    sections.forEach((item) => {
      const triggerElement = document.getElementById(item.section_id);
      if (!triggerElement) return;

      const state = triggerElement.getAttribute('data-state');

      if (allExpanded === ExpandState.ALL_COLAPSED && state === 'open') {
        return;
      }
      if (allExpanded === ExpandState.ALL_EXPANDED && state === 'closed') {
        return;
      }
      triggerElement.click();
    });
    setAllExpanded((currentState) =>
      currentState === ExpandState.ALL_COLAPSED
        ? ExpandState.ALL_EXPANDED
        : ExpandState.ALL_COLAPSED
    );
  };

  return (
    <div className={className}>
      <div className='flex justify-between items-center'>
        <b className='relative tracking-[-0.5px] text-3xl leading-[60px]  h-[57px]'>
          <span>Course Content</span>
        </b>
        <Button onClick={toggleExpandState} variant={'courseAppBtn'}>
          {allExpanded === ExpandState.ALL_EXPANDED
            ? 'Colapsed All'
            : 'Expand All'}
        </Button>
      </div>
      <div>
        <Accordion type='multiple'>
          {sections.map((section, index) => (
            <AccordionItem value={section.section_id} key={section.section_id}>
              <AccordionTrigger
                id={section.section_id}
                className='border p-4 text-lg font-bold'
              >
                <div className='flex justify-between w-full '>
                  <div className='flex'>
                    <span>{`${index + 1}. `}</span>
                    <span className='text-start'>{section.section_title}</span>
                  </div>
                  <span className='text-sm pt-1 pr-4'>
                    {`${section.sub_sections.length} Videos`}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className='bg-[#381D74] p-6 gap-4'>
                {section.sub_sections.map((subSection, index) => (
                  <div
                    className='flex items-center hover:bg-[#7F56D9] justify-between p-1 gap-4 min-h-[40px]'
                    key={index}
                  >
                    <div className='flex gap-4'>
                      {/* <Video size={20} /> */}
                      <span className='text-base'>{subSection.title}</span>
                    </div>
                    <span>{`${Math.floor(Math.random() * 100)} minutes`}</span>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default CourseContent;
