/** @format */

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/Layout';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import './main.scss';
const calender = () => {
    return (
        <Layout>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
            />
        </Layout>
    );
};
export default calender;
