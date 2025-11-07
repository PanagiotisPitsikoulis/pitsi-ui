import Flex from "@/registry/new-york-v4/ui/flex"

export default function FlexDemo() {
  return (
    <Flex direction="col" gap="md">
      <Flex
        justify="between"
        align="center"
        className="bg-muted rounded-lg p-4"
      >
        <span className="font-semibold">Start</span>
        <span className="font-semibold">End</span>
      </Flex>
      <Flex justify="center" gap="sm" className="bg-muted rounded-lg p-4">
        <div className="bg-primary size-8 rounded" />
        <div className="bg-primary size-8 rounded" />
        <div className="bg-primary size-8 rounded" />
      </Flex>
    </Flex>
  )
}
