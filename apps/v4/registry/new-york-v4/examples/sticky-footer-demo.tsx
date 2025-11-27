"use client"

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="text-foreground/50 mb-2 uppercase">About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-foreground/50 mb-2 uppercase">Education</h3>
        <p>News</p>
        <p>Learn</p>
        <p>Certification</p>
        <p>Publications</p>
      </div>
    </div>
  )
}

const Content = () => {
  return (
    <div className="bg-muted text-foreground flex h-full w-full flex-col justify-between px-12 py-8">
      <div>
        <Nav />
      </div>
      <div className="flex items-end justify-between">
        <h1 className="mt-10 text-[14vw] leading-[0.8]">Sticky Footer</h1>
        <p>©copyright</p>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative -top-[100vh] h-[calc(100vh+800px)]">
        <div className="sticky top-[calc(100vh-800px)] h-[800px]">
          <Content />
        </div>
      </div>
    </div>
  )
}

const Intro = () => {
  return (
    <div className="flex h-screen items-center justify-center text-[2vw]">
      <h2 className="text-foreground max-w-[45%] text-center leading-none">
        This is an example of a sticky footer made with CSS. Scroll down to see
        the footer reveal effect.
      </h2>
    </div>
  )
}

export default function StickyFooterDemo() {
  return (
    <main>
      <Intro />
      <Footer />
    </main>
  )
}
