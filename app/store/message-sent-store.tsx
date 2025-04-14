import {create} from 'zustand'

type MessageSentStoreTypes = {
  message_sent: boolean;
  set_message_sent: () => void;
  reset_message_sent: () => void
}

const message_sent_store  = create<MessageSentStoreTypes>((set) => ({
  message_sent: false,
  set_message_sent: () => set({message_sent: true}),
  reset_message_sent: () => set({message_sent: false})
}))

export default message_sent_store;