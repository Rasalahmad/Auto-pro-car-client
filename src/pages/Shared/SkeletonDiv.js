import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const SkeletonDiv = () => {
    return (
        <div>
            <Skeleton variant="rectangular" width={345} height={140} />
            <Skeleton />
            <Skeleton width="40%" heigh="25px" sx={{ mx: 'auto' }} />
            <Skeleton width="40%" sx={{ mx: "auto" }} />
            <Skeleton width="30%" />
        </div>
    );
};

export default SkeletonDiv;