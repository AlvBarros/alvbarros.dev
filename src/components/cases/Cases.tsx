import Case from "@/types/Case";

export const cases: Case[] = [
  {
    title: "Case 1: Refactor of automated billing",
    introduction: [
      <span>
        In one of my contracts there was need to automatically bill clients
        every Monday, before everyone wakes up. This is very common in many
        early stage startups, and it's a sensitive feature to maintain and/or
        update.
      </span>,
      <span>
        Their solution to this was to make an{" "}
        <strong className="text-teal-400">
          automated request to an endpoint at 00:30 AM
        </strong>
        , when no one was using the system. This endpoint would signal to the
        system to start billing clients.
      </span>,
      <span>
        As my client's company grew, this endpoint started to{" "}
        <strong className="text-teal-400">timeout</strong>. They then would add
        another request, at 01:00 AM. Initially, this fixed the problem, but
        obviously this was not ideal.
      </span>,
      <span>
        My solution to this problem was to refactor this endpoint to a
        <strong className="text-teal-400"> Message Queue Architecture</strong>{" "}
        utilizing AWS Step Functions and SQS, since they were on AWS. Now, each
        client was added to a queue and was handled in a separate{" "}
        <strong className="text-teal-400">serverless</strong> Lambda function.
      </span>,
    ],
    coverImage: "https://placehold.co/500",
    page: "automated_billing",
  },
  {
    title: "Case 2: Design a secure document transfer system",
    introduction: [
      <span>
        In order to
        <strong className="text-teal-400"> reduce paper consumption </strong>
        and start the
        <strong className="text-teal-400"> digitalization </strong> of many
        processes in the bank, I was tasked with reworking the process of
        creating new checking accounts.
      </span>,
      <span>
        Through a <strong className="text-teal-400"> mobile app </strong>, the
        manager would be able to take pictures of the client's documents and{" "}
        <strong className="text-teal-400"> securely </strong> send them to an
        automated OCR system that would validate and save the data.
      </span>,
      <span>
        The app had to be{" "}
        <strong className="text-teal-400">secure and performant</strong>,
        otherwise it would not be worth the investment to replace the old
        workflow. This required compression and encryption of the images in
        order to be safely transmitted, but at the same time quality could not
        be lost since the OCR would need to be able to “read” the image.{" "}
      </span>,
      <span>
        What used to take a few hours, now takes{" "}
        <strong className="text-teal-400"> less than a minute</strong>. Not only
        that, we reduced the paper usage and CO2 emissions since there was no
        longer a need for delivering the documents.
      </span>,
    ],
    coverImage: "https://placehold.co/500",
    page: "secure_document_transfer",
  },
];
