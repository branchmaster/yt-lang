import React from 'react';
import JobDescription from '../containers/Home/JobDescription';
import PrimaryButton from './buttons/PrimaryButton';
import companyIcon from '../assets/images/company.svg';

const JobCard = () => {
  const job = {
    id: 0,
    name: 'React Software Developer',
    company: 'Google',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png',
    tags: ['Linux', 'Python', 'JIRA', 'Java', 'Startup'],
    timeAgo: '10min',
  };

  return (
    <div className="mt-8">
      <div
        className={
          'pt-6 mt-4 bg-white rounded-xl shadow-fd border border-transparent'
        }
      >
        <div
          className={
            'flex flex-row justify-between px-6 pb-6 border-b border-gray-100'
          }
        >
          <div className="flex flex-row items-center">
            {job.logo !== '' ? (
              <img
                className="w-12 h-12 rounded-full"
                src={job.logo}
                alt="company-logo"
              />
            ) : (
              <div className="flex flex-row items-center justify-center w-12 h-12 text-2xl font-bold text-white bg-blue-500 rounded-full select-none">
                {job.name[0]}
              </div>
            )}
            <div className="ml-6">
              <span className="block text-lg font-bold text-primary-500">
                {job.name}
              </span>
              <div className="flex flex-row items-center text-gray-400">
                <img
                  className="w-auto h-4 mr-1 text-green-100"
                  src={companyIcon}
                  alt="company-icon"
                />
                <span className="block">{job.company}</span>
              </div>
              <div className="flex flex-row flex-wrap mr-2 md:hidden">
                {job.tags.map((tag) => (
                  <span
                    className="px-1 my-1 mr-2 text-sm border rounded-lg text-primary-500 border-primary-500"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex-row-reverse flex-wrap hidden mr-16 md:flex">
              {job.tags
                .slice(0)
                .reverse()
                .map((tag) => (
                  <span className="px-1 my-1 ml-2 text-sm border rounded-lg text-primary-500 border-primary-500">
                    {tag}
                  </span>
                ))}
            </div>
            <span className="block w-8 mr-4 text-right md:mr-16 text-primary-500">
              {job.timeAgo}
            </span>
            <PrimaryButton className="hidden md:block" text="Apply" inactive />
          </div>
        </div>
        <div className="px-8 py-3 mb-4 md:mb-0 md:py-8 md:px-24">
          <JobDescription inactive />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
