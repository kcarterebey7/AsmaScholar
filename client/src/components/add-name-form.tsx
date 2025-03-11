
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AddNameForm() {
  const [formData, setFormData] = useState({
    arabicName: "",
    transliteration: "",
    pronunciation: "",
    meaning: "",
    description: "",
    detailedExplanation: "",
    innerMeaning: "",
    technique: "",
    relatedNames: [],
    orderNumber: 100, // Default to a high number
    category: ""
  });

  const [relatedNamesInput, setRelatedNamesInput] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Process related names from comma-separated string to array
    const nameData = {
      ...formData,
      relatedNames: relatedNamesInput.split(",").map(name => name.trim()).filter(Boolean),
      orderNumber: Number(formData.orderNumber)
    };
    
    try {
      // Send the data to the backend API
      const response = await fetch('/api/names', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nameData),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const result = await response.json();
      console.log("Submitted name data:", result);
      setMessage("Name data submitted successfully!");
      
      // Clear form after success
      setFormData({
        arabicName: "",
        transliteration: "",
        pronunciation: "",
        meaning: "",
        description: "",
        detailedExplanation: "",
        innerMeaning: "",
        technique: "",
        relatedNames: [],
        orderNumber: 100,
        category: ""
      });
      setRelatedNamesInput("");
    } catch (error) {
      console.error("Error submitting name:", error);
      setMessage("Error submitting name data");
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Add New Name</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="arabicName">Arabic Name</Label>
              <Input 
                id="arabicName" 
                name="arabicName" 
                value={formData.arabicName} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="transliteration">Transliteration</Label>
              <Input 
                id="transliteration" 
                name="transliteration" 
                value={formData.transliteration} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="pronunciation">Pronunciation</Label>
              <Input 
                id="pronunciation" 
                name="pronunciation" 
                value={formData.pronunciation} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="meaning">Meaning</Label>
              <Input 
                id="meaning" 
                name="meaning" 
                value={formData.meaning} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="orderNumber">Order Number</Label>
              <Input 
                id="orderNumber" 
                name="orderNumber" 
                type="number" 
                value={formData.orderNumber} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input 
                id="category" 
                name="category" 
                value={formData.category} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="detailedExplanation">Detailed Explanation</Label>
            <Textarea 
              id="detailedExplanation" 
              name="detailedExplanation" 
              value={formData.detailedExplanation} 
              onChange={handleChange} 
              rows={4}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="innerMeaning">Inner Meaning</Label>
            <Textarea 
              id="innerMeaning" 
              name="innerMeaning" 
              value={formData.innerMeaning} 
              onChange={handleChange} 
              rows={4}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="technique">Spiritual Technique</Label>
            <Textarea 
              id="technique" 
              name="technique" 
              value={formData.technique} 
              onChange={handleChange} 
              rows={4}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="relatedNames">Related Names (comma-separated)</Label>
            <Input 
              id="relatedNames" 
              name="relatedNames" 
              value={relatedNamesInput} 
              onChange={(e) => setRelatedNamesInput(e.target.value)} 
            />
          </div>
          
          <Button type="submit" className="w-full">Add Name</Button>
          
          {message && (
            <div className={`p-3 rounded-md ${message.includes("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
              {message}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
