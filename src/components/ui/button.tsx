import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const CONFETTI_COLORS = ["#22d3ee", "#60a5fa", "#a78bfa", "#f472b6", "#f59e0b", "#34d399"]

function spawnHoverConfetti(x: number, y: number) {
  if (typeof document === "undefined") return

  const layer = document.createElement("div")
  layer.style.position = "fixed"
  layer.style.left = "0"
  layer.style.top = "0"
  layer.style.width = "100vw"
  layer.style.height = "100vh"
  layer.style.pointerEvents = "none"
  layer.style.zIndex = "9999"
  document.body.appendChild(layer)

  const total = 16
  for (let i = 0; i < total; i += 1) {
    const particle = document.createElement("span")
    const angle = (Math.PI * 2 * i) / total + (Math.random() - 0.5) * 0.6
    const distance = 14 + Math.random() * 34
    const dx = Math.cos(angle) * distance
    const dy = Math.sin(angle) * distance - (6 + Math.random() * 7)
    const size = 4 + Math.random() * 3.5
    const rotate = (Math.random() - 0.5) * 220
    const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length]

    particle.style.position = "absolute"
    particle.style.left = `${x}px`
    particle.style.top = `${y}px`
    particle.style.width = `${size}px`
    particle.style.height = `${size * (0.7 + Math.random() * 0.8)}px`
    particle.style.borderRadius = Math.random() > 0.4 ? "999px" : "2px"
    particle.style.background = color
    particle.style.opacity = "1"
    particle.style.transform = "translate(-50%, -50%)"
    particle.style.boxShadow = `0 0 8px ${color}99`
    particle.style.transition =
      "transform 900ms cubic-bezier(.16,.84,.32,1), opacity 1000ms ease-out"

    layer.appendChild(particle)

    requestAnimationFrame(() => {
      particle.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${rotate}deg) scale(0.92)`
      particle.style.opacity = "0.04"
    })
  }

  window.setTimeout(() => {
    layer.remove()
  }, 1050)
}

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  onMouseEnter,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"
  const burstLockRef = React.useRef(false)

  const handleMouseEnter: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (!burstLockRef.current) {
      burstLockRef.current = true
      spawnHoverConfetti(event.clientX, event.clientY)
      window.setTimeout(() => {
        burstLockRef.current = false
      }, 320)
    }

    onMouseEnter?.(event)
  }

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      onMouseEnter={handleMouseEnter}
      {...props}
    />
  )
}

export { Button, buttonVariants }
