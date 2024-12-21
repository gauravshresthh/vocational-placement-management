import { Card } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import React from 'react';

const StudentDashboard = () => {
  return (
    <>
      <Card className="w-2/3 p-4">
        <Typography variant={'h2'}>Welcome, Ellen Jonas</Typography>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between">
              <Typography variant={'p5'}>Course :</Typography>
              <Typography variant={'p5'}>Diploma in IT</Typography>
            </div>
            <div className="flex justify-between">
              <Typography variant={'p5'}>VPO :</Typography>
              <Typography variant={'p5'}>Mike Jordan</Typography>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <Typography variant={'p5'}>Course :</Typography>
              <Typography variant={'p5'}>Diploma in IT</Typography>
            </div>
            <div className="flex justify-between">
              <Typography variant={'p5'}>VPO :</Typography>
              <Typography variant={'p5'}>Mike Jordan</Typography>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default StudentDashboard;
