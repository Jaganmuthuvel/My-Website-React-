import React from 'react'

const Content = () => {
  return (
    <div>
        <section className="py-16 bg-gray-100">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-800">🔥 Featured Highlights</h2>
    <p className="text-gray-600">What makes this project stand out</p>
  </div>
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
    {[
      {
        title: "⚡ Fast Performance",
        desc: "Powered by Vite for blazing speed",
      },
      {
        title: "🎨 Beautiful UI",
        desc: "Styled with Tailwind & modern design trends",
      },
      {
        title: "💻 Developer Friendly",
        desc: "Built using React component architecture",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
      >
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

    </div>
  )
}

export default Content