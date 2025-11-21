import {
  SegmentedControl,
  SegmentedControlContent,
  SegmentedControlList,
  SegmentedControlTrigger,
} from "@/registry/new-york-v4/ui/segmented-control"

export default function SegmentedControlDemo() {
  return (
    <SegmentedControl defaultValue="account" className="w-[400px]">
      <SegmentedControlList>
        <SegmentedControlTrigger value="account">
          Account
        </SegmentedControlTrigger>
        <SegmentedControlTrigger value="password">
          Password
        </SegmentedControlTrigger>
        <SegmentedControlTrigger value="settings">
          Settings
        </SegmentedControlTrigger>
      </SegmentedControlList>
      <SegmentedControlContent value="account" className="mt-4">
        Make changes to your account here.
      </SegmentedControlContent>
      <SegmentedControlContent value="password" className="mt-4">
        Change your password here.
      </SegmentedControlContent>
      <SegmentedControlContent value="settings" className="mt-4">
        Update your settings here.
      </SegmentedControlContent>
    </SegmentedControl>
  )
}
