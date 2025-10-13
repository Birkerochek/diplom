import { DefaultValues } from "react-hook-form";
import { EventFormInput } from "./event.schema";

export const eventDefaultValues: DefaultValues<EventFormInput> = {
    title: "",
    description: "",
    activityType: "",
    customActivityType: "",
    eventDate: undefined,
    startTime: "",
    endTime: "",
    location: "",
    address: "",
    maxParticipants: 1,
    requirements: "",
    skills: "",
};