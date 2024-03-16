import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { Link } from '../api/interfaces';

interface ModelGraphProps {
  links: Link[];
  onNodeClick: (nodeId: number, nodeType: string) => void;
}

function ModelGraph({ links, onNodeClick }: ModelGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      const width = svg.node()?.getBoundingClientRect().width || 0;
      const height = svg.node()?.getBoundingClientRect().height || 0;

      const nodes = Array.from(new Set(links.flatMap((link) => [link.source, link.target])));

      const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id((d: any) => d.id))
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(width / 2, height / 2));

      const link = svg.append('g')
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke', '#999')
        .attr('stroke-opacity', 0.6);

      const node = svg.append('g')
        .selectAll('circle')
        .data(nodes)
        .join('circle')
        .attr('r', 5)
        .attr('fill', (d) => getNodeColor(d.type))
        .attr('stroke', '#fff')
        .attr('stroke-width', 1.5)
        .call(drag(simulation) as unknown as any)
        .on('click', (event, d) => onNodeClick(d.id, d.type));

      const label = svg.append('g')
        .selectAll('text')
        .data(nodes)
        .join('text')
        .text((d) => d.name)
        .attr('font-size', 12)
        .attr('dx', 8)
        .attr('dy', 4);

      simulation.on('tick', () => {
        link
          .attr('x1', (d) => (d.source as any).x)
          .attr('y1', (d) => (d.source as any).y)
          .attr('x2', (d) => (d.target as any).x)
          .attr('y2', (d) => (d.target as any).y);

        node
          .attr('cx', (d) => (d as any).x)
          .attr('cy', (d) => (d as any).y);

        label
          .attr('x', (d) => (d as any).x)
          .attr('y', (d) => (d as any).y);
      });
    }
  }, [links, onNodeClick]);

  return <svg ref={svgRef} style={{ width: '100%', height: '400px' }}></svg>;
}

function getNodeColor(nodeType: string) {
  switch (nodeType) {
    case 'game':
      return '#f0ad4e';
    case 'character':
      return '#5cb85c';
    case 'mechanic':
      return '#5bc0de';
    case 'tag':
      return '#d9534f';
    default:
      return '#777';
  }
}

function drag(simulation: d3.Simulation<any, undefined>) {
  function dragstarted(event: any) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event: any) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(event: any) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  return d3.drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended);
}

export default ModelGraph;