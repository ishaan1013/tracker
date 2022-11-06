import * as Select from '@radix-ui/react-select';

const Priority:React.FC = () => {

  return (
    <Select.Root>

      <Select.Trigger>
        <Select.Value />
        <Select.Icon />
      </Select.Trigger>

      <Select.Portal>

        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport>

            <Select.Item value="High">
              <Select.ItemText>High</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item value="Medium">
              <Select.ItemText>Medium</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
            <Select.Item value="Low">
              <Select.ItemText>Low</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>

          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>

      </Select.Portal>
    </Select.Root>
  )
}

export default Priority