"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
          

<path fillRule="evenodd" clipRule="evenodd" d="M178.525 8.36528C178.95 6.69359 179.483 3.59361 177.603 2.54262C175.731 1.49621 173.296 3.50132 172.01 4.70489C170.728 3.51331 168.225 1.51677 166.346 2.5711C164.476 3.62102 165.052 6.6696 165.486 8.35176C163.741 8.83231 160.75 9.86731 160.75 11.9819C160.75 14.0906 163.738 15.2166 165.473 15.6967C165.037 17.3882 164.489 20.3932 166.362 21.4407C168.248 22.4949 170.744 20.5459 172.042 19.3292C173.336 20.5398 175.747 22.5016 177.619 21.4511C179.497 20.3972 179.008 17.3388 178.574 15.6469C180.255 15.1657 183.25 14.0642 183.25 11.9819C183.25 9.8876 180.243 8.84421 178.525 8.36528ZM178.312 14.7502C178.027 13.8762 177.643 12.9467 177.173 11.9866C177.622 11.0491 177.991 10.1316 178.268 9.26316C179.527 9.61707 182.289 10.426 182.289 11.9819C182.289 13.5525 179.638 14.369 178.312 14.7502ZM177.137 20.6445C175.741 21.4282 173.667 19.5522 172.711 18.6607C173.345 17.9883 173.978 17.2067 174.597 16.3387C175.685 16.2452 176.712 16.0921 177.644 15.8833C177.949 17.0801 178.54 19.8572 177.137 20.6445ZM166.843 20.6333C165.446 19.8525 166.084 17.171 166.405 15.925C167.326 16.1226 168.346 16.2649 169.437 16.3506C170.059 17.1999 170.711 17.9806 171.368 18.6642C170.556 19.4256 168.246 21.4178 166.843 20.6333ZM161.711 11.9819C161.711 10.4055 164.457 9.60249 165.744 9.24945C166.026 10.1374 166.395 11.0658 166.841 12.0046C166.389 12.9574 166.015 13.9006 165.731 14.799C164.503 14.4582 161.711 13.5594 161.711 11.9819ZM166.828 3.37766C168.23 2.59062 170.406 4.50737 171.337 5.3701C170.683 6.05066 170.037 6.82545 169.42 7.66985C168.362 7.76495 167.349 7.91768 166.418 8.12227C166.068 6.76554 165.427 4.16384 166.828 3.37766ZM175.284 8.68282C176.002 8.77068 176.69 8.8875 177.336 9.03049C177.142 9.63304 176.9 10.2631 176.616 10.909C176.203 10.15 175.76 9.4062 175.284 8.68282ZM172.011 6.03608C172.454 6.50173 172.898 7.02173 173.335 7.58585C172.449 7.54526 171.561 7.54507 170.676 7.58527C171.113 7.02636 171.56 6.50713 172.011 6.03608ZM167.392 10.9083C167.112 10.2646 166.873 9.63178 166.677 9.02064C167.319 8.88132 168.004 8.76749 168.717 8.68108C168.24 9.40287 167.798 10.1464 167.392 10.9083ZM168.738 15.3493C168.001 15.2695 167.306 15.1615 166.664 15.0261C166.863 14.4041 167.108 13.7576 167.393 13.1001C167.805 13.87 168.253 14.6207 168.738 15.3493ZM172.037 17.9936C171.582 17.517 171.127 16.9898 170.684 16.4228C171.575 16.4568 172.467 16.4568 173.358 16.4183C172.92 16.9956 172.478 17.5235 172.037 17.9936ZM176.625 13.0666C176.926 13.7313 177.179 14.3743 177.381 14.9857C176.728 15.13 176.024 15.2463 175.282 15.3326C175.761 14.5955 176.211 13.8402 176.625 13.0666ZM174.06 15.4456C172.698 15.54 171.326 15.539 169.963 15.4533C169.188 14.3561 168.499 13.2022 167.903 12.0043C168.496 10.8089 169.18 9.65732 169.951 8.56185C171.316 8.46185 172.688 8.46161 174.053 8.56243C174.817 9.65784 175.501 10.8064 176.107 11.9911C175.508 13.1859 174.82 14.3398 174.06 15.4456ZM177.123 3.34995C178.525 4.1344 177.901 6.92045 177.595 8.13192C176.661 7.92309 175.648 7.76765 174.586 7.6711C173.968 6.81753 173.327 6.04139 172.684 5.36961C173.627 4.48831 175.734 2.57317 177.123 3.34995Z" fill="#53C1DE"/>
