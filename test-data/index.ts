import { faker } from '@faker-js/faker';
import { SubSection, Section, Course, Video } from '@/types';

const generateVideo = (course_id: string, section_id?: string): Video => ({
  video_id: faker.string.uuid(),
  video_url: faker.internet.url(),
  course_id,
  section_id,
});

const generateSubSection = (
  course_id: string,
  section_id: string
): SubSection => ({
  title: faker.lorem.sentence(),
  video: generateVideo(course_id, section_id),
});

const generateSection = (course_id: string): Section => {
  const section_id = faker.string.uuid();
  return {
    section_id,
    course_id,
    section_title: faker.lorem.sentence(),
    sub_sections: Array.from(
      { length: faker.number.int({ min: 3, max: 10 }) },
      () => generateSubSection(course_id, section_id)
    ),
  };
};

const generateCourse = (): Course => {
  const course_id = faker.string.uuid();
  return {
    course_id,
    course_name: faker.company.catchPhrase(),
    instructor_id: faker.string.uuid(),
    demo_video: generateVideo(course_id),
    category: faker.helpers.arrayElement([
      'Design',
      'Next JS',
      'FastApi',
      'Express JS',
      'Prisma',
      'Spring boot',
    ]),
    sections: Array.from(
      { length: faker.number.int({ min: 6, max: 20 }) },
      () => generateSection(course_id)
    ),
    description: faker.lorem.paragraph(),
    image_url: faker.image.url(),
    average_rating: parseFloat(faker.finance.amount(3, 5, 1)),
  };
};

export const generateCourses = (numCourses: number): Course[] =>
  Array.from({ length: numCourses }, generateCourse);
