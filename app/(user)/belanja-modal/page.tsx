import Breadcrumbs from "@/components/user/dashboard/breadcumbs"
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Link from "next/link";

const BelanjaModal = () => {
  return (
    <main>
      <Breadcrumbs 
        breadcrumbs={[
          { label: 'Belanja Modal', href: '/belanja-modal', active: true },
        ]}
        />
      <div className="bg-white border-2 rounded-2xl border-gray-200 p-6 grid justify-start">
        <div className="flex font-semibold text-base mb-2">
          <div className="mr-10">Satuan Kerja</div>
          <div>: KBRI San Francisko</div>
        </div>
        <div className="flex font-semibold text-base mb-2">
          <div className="mr-3">Tahun Anggaran</div>
          <div>: 2025</div>
        </div>
        <div className="flex font-semibold text-base mb-2">
          <div className="mr-3">Timeline</div>
        </div>
        <div className="">
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Link href="/belanja-modal/usulan" className="hover:text-blue-700">Pengajuan Usulan</Link>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Usulan Diterima</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Link href="/belanja-modal/dipa" className="hover:text-blue-700">Penerimaan DIPA</Link>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Realisasi Anggaran</TimelineContent>
          </TimelineItem>

        </Timeline>
        </div>
      </div>
    </main>
  )
}

export default BelanjaModal