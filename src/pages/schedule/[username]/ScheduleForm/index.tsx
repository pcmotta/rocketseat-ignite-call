import { CalendarStep } from '@/pages/schedule/[username]/ScheduleForm/CalendarStep'
import { useState } from 'react'
import { ConfirmStep } from '@/pages/schedule/[username]/ScheduleForm/ConfirmStep'

export function ScheduleForm() {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>()

  function handleClearSelectedDateTime() {
    setSelectedDateTime(null)
  }

  if (selectedDateTime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDateTime}
        onCancelConfirmation={handleClearSelectedDateTime}
      />
    )
  }

  return <CalendarStep onSelectDateTime={setSelectedDateTime} />
}
