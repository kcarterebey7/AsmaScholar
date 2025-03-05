import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import type { Name } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { classifyNames, findRelatedNameGroups } from "@/lib/nameClassification";
import { Plus, X, Save, Edit2 } from "lucide-react";

interface CustomGroup {
  id: string;
  name: string;
  nameIds: number[];
}

export default function RelationshipsPage() {
  const { data: names, isLoading } = useQuery<Name[]>({
    queryKey: ['/api/names']
  });

  const [customGroups, setCustomGroups] = useState<CustomGroup[]>([]);
  const [editingGroupId, setEditingGroupId] = useState<string | null>(null);
  const [newGroupName, setNewGroupName] = useState("");
  const [selectedNames, setSelectedNames] = useState<number[]>([]);

  // Load custom groups from localStorage
  useEffect(() => {
    const savedGroups = localStorage.getItem('customNameGroups');
    if (savedGroups) {
      setCustomGroups(JSON.parse(savedGroups));
    }
  }, []);

  // Save custom groups to localStorage
  useEffect(() => {
    localStorage.setItem('customNameGroups', JSON.stringify(customGroups));
  }, [customGroups]);

  if (isLoading || !names) return <div>Loading...</div>;

  const nameGroups = findRelatedNameGroups(names);
  const classifications = classifyNames(names);

  const createNewGroup = () => {
    if (!newGroupName.trim()) return;

    const newGroup: CustomGroup = {
      id: Date.now().toString(),
      name: newGroupName,
      nameIds: selectedNames
    };

    setCustomGroups([...customGroups, newGroup]);
    setNewGroupName("");
    setSelectedNames([]);
  };

  const deleteGroup = (groupId: string) => {
    setCustomGroups(customGroups.filter(g => g.id !== groupId));
  };

  const updateGroupName = (groupId: string, newName: string) => {
    setCustomGroups(customGroups.map(g => 
      g.id === groupId ? { ...g, name: newName } : g
    ));
    setEditingGroupId(null);
  };

  const toggleNameInGroup = (nameId: number) => {
    setSelectedNames(prev => 
      prev.includes(nameId) 
        ? prev.filter(id => id !== nameId)
        : [...prev, nameId]
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif text-[#333333] dark:text-gray-200 mb-6">
        Name Relationships
      </h1>

      <div className="space-y-8">
        {/* Custom Groups Section */}
        <section>
          <h2 className="text-2xl font-serif text-[#333333] dark:text-gray-200 mb-4">
            Custom Groups
          </h2>

          {/* Create New Group */}
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Enter group name"
                  value={newGroupName}
                  onChange={(e) => setNewGroupName(e.target.value)}
                  className="max-w-xs"
                />
                <Button onClick={createNewGroup} className="gap-2">
                  <Plus className="h-4 w-4" />
                  Create Group
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {names.map(name => (
                  <Button
                    key={name.id}
                    variant={selectedNames.includes(name.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleNameInGroup(name.id)}
                  >
                    {name.transliteration}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Display Custom Groups */}
          <div className="space-y-4">
            {customGroups.map((group) => (
              <Card key={group.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    {editingGroupId === group.id ? (
                      <div className="flex gap-2">
                        <Input
                          value={group.name}
                          onChange={(e) => updateGroupName(group.id, e.target.value)}
                          className="max-w-xs"
                        />
                        <Button
                          size="icon"
                          onClick={() => setEditingGroupId(null)}
                        >
                          <Save className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-serif dark:text-gray-200">
                          {group.name}
                        </h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setEditingGroupId(group.id)}
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteGroup(group.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {names
                      .filter(name => group.nameIds.includes(name.id))
                      .map(name => (
                        <Link 
                          key={name.id}
                          href={`/name/${name.orderNumber}`}
                          className="px-3 py-1 bg-[#EAF3FF] dark:bg-gray-800 rounded-md text-[#14866D] hover:bg-[#D5E5FF] dark:hover:bg-gray-700 transition-colors"
                        >
                          {name.transliteration}
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-[#333333] dark:text-gray-200 mb-4">
            Related Name Groups
          </h2>
          <div className="space-y-4">
            {nameGroups.map((group, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="text-xl font-serif mb-3 dark:text-gray-200">
                    Group {index + 1}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.map(name => (
                      <Link 
                        key={name.id}
                        href={`/name/${name.orderNumber}`}
                        className="px-3 py-1 bg-[#EAF3FF] dark:bg-gray-800 rounded-md text-[#14866D] hover:bg-[#D5E5FF] dark:hover:bg-gray-700 transition-colors"
                      >
                        {name.transliteration}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-[#333333] dark:text-gray-200 mb-4">
            Individual Name Relationships
          </h2>
          <div className="space-y-4">
            {classifications.map(({ name, relatedTo, similarCategory }) => (
              <Card key={name.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <h3 className="text-xl font-serif mb-3 dark:text-gray-200">
                    {name.transliteration}
                  </h3>

                  {relatedTo.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Directly Related Names:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {relatedTo.map(related => (
                          <Link
                            key={related.id}
                            href={`/name/${related.orderNumber}`}
                            className="text-[#14866D] hover:underline dark:hover:text-[#1A9E82]"
                          >
                            {related.transliteration}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {similarCategory.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Similar Category ({name.category}):
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {similarCategory.map(similar => (
                          <Link
                            key={similar.id}
                            href={`/name/${similar.orderNumber}`}
                            className="text-[#14866D] hover:underline dark:hover:text-[#1A9E82]"
                          >
                            {similar.transliteration}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}