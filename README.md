# pass.in

Pass.in is a backend application for **managing participants in physical events**.

The tool allows the organizer to register an event and open a public registration page.

Registered participants can generate a credential for check-in on the day of the event.

The system will scan the participant's credential to allow entry to the event.

## Requirements

### Functional requirements

- [x] The organizer must be able to register a new event;
- [x] The organizer must be able to view event data;
- [x] The organizer must be able to view the list of participants;
- [x] The participant must be able to register for an event;
- [x] The participant must be able to view their registration badge;
- [x] The participant must be able to check-in at the event;

### Business Rules

- [x] The participant can only register for an event once;
- [x] The participant can only register for events with available slots;
- [x] The participant can only check-in at an event once;

### Non-functional requirements

- [x] Event check-in will be done via a QR code;

## Technologies

- Node JS
- Fastify
- Typescript
- Prisma
- SQLite
- Swagger
- Zod

