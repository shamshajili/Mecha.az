import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Cpu, Database, Layers } from "lucide-react";

const data = [
  { name: "A", value: 40 },
  { name: "B", value: 70 },
  { name: "C", value: 30 },
  { name: "D", value: 80 },
  { name: "E", value: 60 },
  { name: "F", value: 50 },
  { name: "G", value: 70 },
];

export default function Dashboard() {
  return (
    <div className=" min-h-screen flex justify-center items-center p-6">
      <div className="w-[1200px] bg-zinc-800 rounded-lg shadow-lg p-8">
        {/* MacOS Bar */}
        <div className="flex items-center bg-black rounded-t-lg px-4 py-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-xs ml-3">MECHA.az Dashboard</span>
        </div>

        {/* İçerik */}
        <div className="p-4 space-y-4">
          {/* Status & Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {/* Device Status */}
            <div className="bg-black p-4 rounded-lg">
              <h2 className="text-gray-400 text-sm mb-2">Device Status</h2>
              <div className="space-y-2">
                <div className="bg-gray-600 h-3 rounded-full">
                  <div className="bg-gray-400 h-3 rounded-full w-[85%]"></div>
                </div>
                <div className="bg-gray-600 h-3 rounded-full">
                  <div className="bg-teal-500 h-3 rounded-full w-[65%]"></div>
                </div>
                <div className="bg-gray-600 h-3 rounded-full">
                  <div className="bg-gray-500 h-3 rounded-full w-[80%]"></div>
                </div>
                <div className="bg-gray-600 h-3 rounded-full">
                  <div className="bg-green-500 h-3 rounded-full w-[40%]"></div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-black p-4 rounded-lg">
              <h2 className="text-gray-400 text-sm mb-2">Performance Metrics</h2>
              <ResponsiveContainer width="100%" height={100}>
                <BarChart data={data}>
                  <XAxis dataKey="name" tick={false} />
                  <YAxis tick={false} />
                  <Tooltip cursor={false} content={() => null} />
                  <Bar dataKey="value" fill="#0db9d7" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* System Overview */}
          <div className="bg-black p-4 rounded-lg">
            <h2 className="text-gray-400 text-sm mb-2">System Overview</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex justify-center items-center bg-zinc-800 p-6 rounded-lg">
                <Cpu className="text-teal-400 w-8 h-8" />
              </div>
              <div className="flex justify-center items-center bg-zinc-800 p-6 rounded-lg">
                <Database className="text-green-400 w-8 h-8" />
              </div>
              <div className="flex justify-center items-center bg-zinc-800 p-6 rounded-lg">
                <Layers className="text-indigo-400 w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
